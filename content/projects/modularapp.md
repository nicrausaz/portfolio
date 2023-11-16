+++
date = '2023-11-08T12:46:09+01:00'
draft = false
title = "Travail de Bachelor"
projectType = "School"
mandator = "YALK"
mandator_url = "https://yalk.ch/"
description = '''
Mon travail de Bachelor à consisté en la réalisation d'une architecture et une application modulable, permettant de créer des interactions entre des dispositifs et des services web dans un réseau local.
'''
techs = ["React", "Node.js", "TypeScript"]
image = "modularapp.svg"
github = "https://github.com/nicrausaz/tb-modularapp"
website = ""
+++

Ce projet a été réalisé dans le cadre de mon travail de Bachelor à l'HEIG-VD. Il a consisté en la réalisation d'une architecture et une application modulable, permettant de créer des interactions entre des dispositifs et des services web dans un réseau local.

{{<lnbreak>}}

L’application facilite la création d’intégrations entre des services et dispositifs locaux n’ayant pas été conçu pour communiquer ensemble nativement. L’approche d’implémentation de cette application est modulaire : les différentes intégrations sont construites sous la forme de modules indépendants, importables dans l’application. Ces modules disposent d’un affichage offrant une visualisation de données en temps réel. Des fonctionnalités de configuration des modules et de création d’écrans de visualisation permettent de disposer les affichages des modules sur une grille dynamique. Ces écrans sont destinés à être affichés sur des moniteurs reliés à la passerelle. Ces fonctionnalités ont été implémentées en utilisant la librairie React pour l’interface web, l’environnement Node.js pour le backend, ainsi que TypeScript de manière commune.

{{<lnbreak>}}

Un module de preuve de concept a été développé, permettant d’exploiter pleinement les fonctionnalités offertes par l’application. Celui-ci crée une intégration entre le logiciel de l’entreprise YALK et un lecteur de badge connecté à la passerelle, permettant d’effectuer le timbrage des sessions de travail des employés.

{{<lnbreak>}}

L’application, fonctionnelle et répondant aux besoins du cahier des charges, compose une base solide et adaptée à de nombreuses possibilités d’améliorations et de nouvelles fonctionnalités. Son utilisation en production au sein d’une entreprise demandera cependant quelques consolidations.

{{<lnbreak>}}
J'ai obtenu pour ce travail, la note de 5.7 (sur 6).