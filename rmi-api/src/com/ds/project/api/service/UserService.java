/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ds.project.api.service;

import com.ds.project.api.entity.User;
import java.rmi.Remote;
import java.rmi.RemoteException;
import java.util.List;

/**
 *
 * @author Kalpani Abeysinghe
 */

//call back interface for the users client
//client has to implement this call back interface
public interface UserService extends Remote{
    
      List<User> getAllUser() throws RemoteException; //get the list of the all the users avalible in the database
}
