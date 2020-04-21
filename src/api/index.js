import React, { Component } from 'react'


   export const fetchData = () => (

        fetch('https://covid19.mathdro.id/api')
        .then((response) => (
             response.json()))
        .then((data) => {
            console.log(data)    
            return data
        })
            
   )