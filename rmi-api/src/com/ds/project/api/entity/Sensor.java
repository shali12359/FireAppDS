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
import java.io.Serializable;
import javafx.beans.property.LongProperty;
import javafx.beans.property.SimpleLongProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

/**
 *
 * @author Kalpani Abeysinghe
 */
//model class for the sensor model
public class Sensor implements Externalizable{

    public final StringProperty location = new SimpleStringProperty(); //provides a full implementation of a Property wrapping a String value
    private final LongProperty id = new SimpleLongProperty();
    private final StringProperty smokeLevel = new SimpleStringProperty();
    private final StringProperty co2Level = new SimpleStringProperty();
    private final StringProperty status = new SimpleStringProperty();
    private final StringProperty mid = new SimpleStringProperty();

     public String getMid() {//getter method to get the value from the object
        return mid.get();
    }

    public void setMid(String value) {
        mid.set(value);
    }

    public StringProperty midProperty() {
        return mid;
    }

    public String getLocation() {
        return location.get();
    }

    public void setLocation(String value) {
        location.set(value);
    }

    public StringProperty locationProperty() {
        return location;
    }

    public String getSmokeLevel() {
        return smokeLevel.get();
    }

    public void setSmokeLevel(String value) {
        smokeLevel.set(value);
    }

    public StringProperty smokeLevelProperty() {
        return smokeLevel;
    }

    public String getCo2Level() {
        return co2Level.get();
    }

    public void setCo2Level(String value) {
        co2Level.set(value);
    }

    public StringProperty getCo2LevelProperty() {
        return co2Level;
    }

    public String getStatus() {
        return status.get();
    }

    public void setStatus(String value) {
        status.set(value);
    }

    public StringProperty statusProperty() {
        return status;
    }

    public long getId() {
        return id.get();
    }

    public void setId(long value) {
        id.set(value);
    }

    public LongProperty idProperty() {
        return id;
    }

    //provide the logic for serialization i.e. writing the fields of class into bytes
    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeLong(getId());
        out.writeObject(getLocation());
        out.writeObject(getSmokeLevel());
        out.writeObject(getCo2Level());
        out.writeObject(getStatus());
        out.writeObject(getMid());
    }

    //this method must read the values in the same sequence and with the same types as were written by writeExternal() method
    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        setId(in.readLong());
        setLocation((String) in.readObject());
        setSmokeLevel((String) in.readObject());
        setCo2Level((String) in.readObject());
        setStatus((String) in.readObject());
        setMid((String) in.readObject()); 
        
          }

}
