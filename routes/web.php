<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return Inertia::render('Demo/Welcome',[
//         'title' => 'Welcome to Laravel 12',
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('dashboard/analytics/index');
});

// Route::get('/welcome', action: function () {

// });
