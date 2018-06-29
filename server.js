var express = require('express');
    express().use('/', express.static(__dirname)).listen(8585)
    console.log(8585);
