package com.ergo.registry.controllers;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.containsString;

//@WebMvcTest(PersonController.class)
//@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
public class PersonControllerIntegrationTest {

  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private PersonController controller;

  @Test
  public void controllerTest() throws Exception{
      assertThat(controller).isNotNull();
  }

    @Test
    public void jsonContentTest() throws Exception {
        this.mockMvc.perform(get("/api/v1/people/")).andDo(print()).andExpect(status().isOk())
                .andExpect(content().string(containsString("firstName")));
    }

   @Test
   void contextTest() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/");
       MvcResult result = mockMvc.perform(request).andReturn();
       assertEquals("", result.getResponse().getContentAsString());
  }

  @Test
    void listTest() {
    }

  @Test
    void createTest() {
   }

   @Test
    void getTest() {
    }
}