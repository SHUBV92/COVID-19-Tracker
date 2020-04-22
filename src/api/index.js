import React, { Component } from "react";

export const fetchData = async () =>
  await fetch("https://covid19.mathdro.id/api")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
