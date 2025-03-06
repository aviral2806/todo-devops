package com.aviral28.todo_backend.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityNotFoundException;

@Repository
public interface TodoJPARepo extends JpaRepository<Todo,Integer> {
	
}
