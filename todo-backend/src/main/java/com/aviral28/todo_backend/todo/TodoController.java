package com.aviral28.todo_backend.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.EntityNotFoundException;

@RestController
public class TodoController {
	private TodoJPARepo jparepo;

	@Autowired
	public TodoController(TodoRepository repo, TodoJPARepo jparepo) {
		super();
		this.jparepo = jparepo;
	}

	@GetMapping(path = "/todos/")
	public List<Todo> returnTodos() {
		return jparepo.findAll();
	}

	@PostMapping("/todos/")
	public ResponseEntity<Todo> addTodo(@RequestBody Todo todo) {
		Todo newTodo = jparepo.save(todo);
		return new ResponseEntity<>(newTodo, HttpStatus.CREATED);
	}

	@PutMapping("/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable int id, @RequestBody Todo todo) {
		Todo updT = jparepo.findById(id).map(
				todo1 -> {
					todo1.setTaskDescription(todo.getTaskDescription());
					todo1.setTaskName(todo.getTaskName());
					return jparepo.save(todo1);
				}).orElse(null);

		return updT != null ? ResponseEntity.ok(updT) : ResponseEntity.notFound().build();
	}

	@PatchMapping("/todos/{id}")
	public ResponseEntity<Todo> toggleDone(@PathVariable int id) {
		Todo updT = jparepo.findById(id).map(
				todo -> {
					todo.setDone(!todo.isDone());
					return jparepo.save(todo);
				}).orElse(null);

		return updT != null ? ResponseEntity.ok(updT) : ResponseEntity.notFound().build();
	}

	@DeleteMapping("/todos/{id}")
	public ResponseEntity<Todo> deleteTodo(@PathVariable int id) {
		if (jparepo.existsById(id)) {
			jparepo.deleteById(id);
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
