'use client'
import React from 'react'
import { Github, Twitter, Linkedin, Mail, Code } from "lucide-react";


function Footer() {
  return (
    <div className='max-w-screen flex justify-center'>
        <footer className="flex border-t border-border/40 mt-32 w-[100%]">
            <div className='flex flex-col items-center w-[100%] gap-4'>
                <div className='flex justify-evenly w-[100%]'>
                    <div className=''>
                        <Code />
                    </div>

                    <div className="flex flex-wrap flex-col justify-center  text-sm ">
                        <a href="#" className="">Privacy Policy</a>
                        <a href="#" className="">About Us</a>
                        <a href="#" className="">Contact Us</a>
                        <a href="#" className="">Documentation</a>
                    </div>

                    <div className="flex flex-wrap flex-col justify-center  text-sm ">
                        <a href="#" className="">Privacy Policy</a>
                        <a href="#" className="">About Us</a>
                        <a href="#" className="">Contact Us</a>
                        <a href="#" className="">Documentation</a>
                    </div>

                </div>


                <div className="flex gap-6">
                        <a href="#" className="w-10 h-10 rounded-full  flex items-center justify-center">
                            <Github className="w-5 h-5 text-foreground" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full  flex items-center justify-center">
                            <Twitter className="w-5 h-5 text-foreground" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full  flex items-center justify-center">
                            <Linkedin className="w-5 h-5 text-foreground" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full  flex items-center justify-center">
                            <Mail className="w-5 h-5 text-foreground" />
                        </a>
                </div>

                <p className="text-sm text-muted-foreground">
                © 2024, All rights reserved.
                </p>
            </div>
            
      </footer>
    </div>
  )
}

export default Footer