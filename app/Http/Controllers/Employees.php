<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class Employees extends Controller
{
    //
    public function index($id=null){
        if($id==null){
            return Employee::orderBy('id', 'asc')->get();
        }else{
            return $this->show($id);
        }
    }

    public function store(Request $request){
        $employee=new Employee();
        $employee->name=$request->input('name');
        $employee->email=$request->input('email');
        $employee->contact_number=$request->input('contact_number');
        $employee->position=$request->input('position');
        $employee->save();
        return 'Employee record saved!';
    }

    public function show($id){
        return Employee::find($id);
    }

    public function update(Request $request, $id){
        $employee=Employee::find($id);
        $employee->name=$request->input('name');
        $employee->email=$request->input('email');
        $employee->contact_number=$request->input('contact_number');
        $employee->position=$request->input('position');
        $employee->save();

        return 'succes';
    }

    public function destroy(Request $request){
        $employee=Employee::find($request->input('id'));
        $employee->delete();
        return 'employee removed';
    }
}
