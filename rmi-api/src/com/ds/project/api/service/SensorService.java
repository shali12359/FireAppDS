/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ds.project.api.service;

import com.ds.project.api.entity.Sensor;
import com.ds.project.api.entity.User;
import java.rmi.Remote;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Kalpani Abeysinghe
 */

//callback interface for the sensor client
//client has to implement this call back interface
public interface SensorService extends Remote {

    Sensor insertSensor(Sensor sensor) throws RemoteException; // used to insert sensor object into the database
    
//  void updateSensor (ArrayList<Sensor> array) throws RemoteException;

    List<Sensor> updateSensor(ArrayList<Sensor> array) throws RemoteException; //used to update the sensor state 

    void deleteSensor(Long id) throws RemoteException; //delete the sensor from the database

    Sensor getSensorById(Long id) throws RemoteException; //get sensor detailes by providing the id

    List<Sensor> getAllSensor() throws RemoteException; //get the list of the all the sensors avalible in the database
    
//  String getAllSensor() throws RemoteException;

    List<User> getAllUser() throws RemoteException; //get all the users available inside the database

    void sendNotification(String msg) throws RemoteException; //sending the notification for the co2 or smoke change

}
