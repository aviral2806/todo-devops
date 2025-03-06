package com.aviral28.todo_backend.todo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="todo")
public class Todo {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String taskName;
	private String taskDescription;
	private boolean done;
	
	public Todo() {
		super();
	}
	public Todo(int id, String taskName, String taskDescription, boolean done) {
		super();
		this.id = id;
		this.taskName = taskName;
		this.taskDescription = taskDescription;
		this.done = done;
	}
	
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTaskName() {
		return taskName;
	}
	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}
	public String getTaskDescription() {
		return taskDescription;
	}
	public void setTaskDescription(String taskDescription) {
		this.taskDescription = taskDescription;
	}
	@Override
	public String toString() {
		return "Todo [id=" + id + ", taskName=" + taskName + ", taskDescription=" + taskDescription + ", done=" + done
				+ "]";
	}
}
