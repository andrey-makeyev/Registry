package com.ergo.registry.controllers;

import com.ergo.registry.models.Person;
import com.ergo.registry.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/people/")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    //list
    @GetMapping
    public List<Person> list(){
        return personRepository.findAll();
    }

    //create
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Person person) {
        personRepository.save(person);
    }

    //view
    @GetMapping("/{id}")
    public Person get(@PathVariable("id") long id) {
        return personRepository.getOne(id);
    }

}
