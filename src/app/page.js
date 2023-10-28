"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import fetch from 'node-fetch';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [data, setData] = React.useState([]);
  const [selectedDay, setSelectedDay] = React.useState("Monday");

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/bj73n37s0wx48")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(selectedDay);
  return (
    <>
      
      <main className="container mx-auto p-4 md:p-4">
        {/* Dropdown for selecting day */}
        <div className="flex flex-col justify-center items-center flex-none m-4">
          <div className="flex items-center space-x-2">
            <Label>Let see exercises on : </Label>
            <Select onValueChange={(value) => setSelectedDay(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a day">
                  {selectedDay}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Day in a week</SelectLabel>
                  {Array.from(new Set(data.map((item) => item.Day))).map(
                    (day, index) => (
                      <SelectItem key={index} value={day}>
                        {day}
                      </SelectItem>
                    )
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Display selected day's exercises */}
        <div className="flex flex-col justify-center items-center flex-none mr-4 m-4">
          {data
            .filter((item) => item.Day === selectedDay)
            .map((item, index) => (
              <Card
                key={index}
                className="flex flex-col md:flex-row justify-between mb-4 items-center md:w-[50%] w-full"
              >
                <div className="flex-1 w-full">
                  <CardHeader>
                    <CardTitle>
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-4">
                          {item.Day}
                        </Badge>
                        {item.Exercise}
                      </div>
                    </CardTitle>
                    <CardDescription>{item.Instructions}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      <b>Duration:</b> {item.Duration}
                    </p>
                    <p>
                      <b>Reps:</b> {item.Reps}
                    </p>
                    <p>
                      <b>Sets:</b> {item.Sets}
                    </p>
                  </CardContent>
                </div>
                <div
                  className="flex flex-col justify-center items-center flex-none m-4"
                  style={{
                    height: "150px",
                    width: "150px",
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "8px",
                  }}
                >
                  <Image
                    src={item.links}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Card>
            ))}
        </div>
      </main>
      
    </>
  );
}
