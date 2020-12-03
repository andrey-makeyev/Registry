package com.ergo.registry.controllers;

import com.ergo.registry.models.Person;
import com.ergo.registry.repositories.PersonRepository;
import com.ergo.registry.services.LogServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/people/")
public class PersonController extends LogServiceImpl {

    @Autowired
    private PersonRepository personRepository;

    //list
    @GetMapping
    public List<Person> list(){
        logger.info("People has been listed.");
        return personRepository.findAll();
    }

    //create
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Person person) {
        logger.info("Person has been created.");
        try {
            personRepository.save(person);
        }   catch(Exception e) {
            logger.warning("IO Error.");
        }
    }

    //view
    @GetMapping("/{id}")
    public Person get(@PathVariable("id") long id) {
        logger.info("Person has been shown.");
        return personRepository.getOne(id);
    }
}
