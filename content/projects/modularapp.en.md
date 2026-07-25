+++
date = '2023-11-08T12:46:09+01:00'
draft = false
title = "Bachelor's Thesis"
projectType = "School"
mandator = "YALK"
mandator_url = "https://yalk.ch/"
description = '''
My Bachelor's thesis consisted of designing an architecture and a modular application that makes it possible to create interactions between devices and web services within a local network.
'''
techs = ["React", "Node.js", "TypeScript"]
image = "modularapp.svg"
github = "https://github.com/nicrausaz/tb-modularapp"
website = ""
+++

This project was carried out as part of my Bachelor's thesis at HEIG-VD. It consisted of designing an architecture and a modular application that makes it possible to create interactions between devices and web services within a local network.

{{<lnbreak>}}

The application makes it easier to build integrations between local services and devices that were not natively designed to communicate with each other. The implementation approach is modular: the various integrations are built as independent modules that can be imported into the application. These modules provide a display offering real-time data visualization. Module configuration and visualization-screen creation features make it possible to arrange the module displays on a dynamic grid. These screens are meant to be shown on monitors connected to the gateway. These features were implemented using the React library for the web interface, the Node.js environment for the backend, and TypeScript throughout.

{{<lnbreak>}}

A proof-of-concept module was developed to fully leverage the features offered by the application. It creates an integration between the software of the company YALK and a badge reader connected to the gateway, allowing employees' work sessions to be clocked in and out.

{{<lnbreak>}}

The application, functional and meeting the specifications, forms a solid foundation suited to many possibilities for improvements and new features. Using it in production within a company would, however, require some consolidation.

{{<lnbreak>}}
I received a grade of 5.7 (out of 6) for this work.
