<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\Request;

class UserController extends Controller{
    public function signup(Request $request){
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        $user = new User([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
             'password' => bcrypt($request->input('password'))
        ]);
        $user->save();
        return response()->json([
            'message' => 'successfully created user'
        ], 201);
    }
}