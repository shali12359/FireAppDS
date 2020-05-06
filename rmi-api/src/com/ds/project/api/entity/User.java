/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ds.project.api.entity;

import java.io.Externalizable;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

/**
 *
 * @author Kalpani Abeysinghe
 */
public class User implements Externalizable {

    public final StringProperty username = new SimpleStringProperty();//provides a full implementation of a Property wrapping a String value
    private final StringProperty password = new SimpleStringProperty();

    public String getUsername() { //getter method to get the value from the object
        return username.get();
    }

    public void setUsername(String value) { //setter method to set the value to the object
        username.set(value);
    }

    public StringProperty usernameProperty() { //getting the stringpropertiy value of the object
        return username;
    }

    public String getPassword() {
        return password.get();
    }

    public void setPassword(String value) {
        password.set(value);
    }

    public StringProperty passwordProperty() {
        return password;
    }

    //provide the logic for serialization i.e. writing the fields of class into bytes
    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeObject(getUsername());
        out.writeObject(getPassword());
    }

     //this method must read the values in the same sequence and with the same types as were written by writeExternal() method
    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        setUsername((String) in.readObject());
        setPassword((String) in.readObject());
    }

}
