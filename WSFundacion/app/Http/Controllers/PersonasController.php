<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
Use Exception;
use App\Persona;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PersonasController extends Controller
{
   function getPersonaId($id)
   {       
    return Persona::findOrFail($id);
   }

    function getPersona(Request $data)
    {
        $id = $data['id'];
        if($id == null)
        {
            return response()->json(Persona::get(), 200);
        }else
        {
            return response()->json(Persona::findOrFail($id), 200);
        }
    }

    function postPersona(Request $data)
    {
        try
        {
            DB::beginTransaction();
            $result = $data->json()->all();
            $persona = Persona::create([
                'nombre'=>$result['nombre'],
                'apellido'=>$result['apellido'],
                'cedula'=>$result['cedula'],
                'descripcion'=>$result['descripcion'],
                'cantidad'=>$result['cantidad'],
                'fecha'=>$result['fecha'],
                'firma'=>$result['firma'],
                'estado'=>true,
            ]);
            DB::commit();
        }
        catch(Exception $e)
        {
            return response()->json($e, 400);
        }
        return response()->json($persona, 200);
    }

    function putPersona(Request $data, $id)
    {
       try{
          DB::beginTransaction();
          $result = $data->json()->all();
          $persona = Persona::where('id',$id)->update([
            'nombre'=>$result['nombre'],
            'apellido'=>$result['apellido'],
            'cedula'=>$result['cedula'],
            'descripcion'=>$result['descripcion'],
            'fecha'=>$result['fecha'],
            'cantidad'=>$result['cantidad'],
            'firma'=>$result['firma'],            
          ]);
          DB::commit();
       } catch (Exception $e) {
          return response()->json($e,400);
       }
       return response()->json($persona,200);
    }

    function deletePersona(Request $data, $id)
    {
        try{
            DB::beginTransaction();
            $persona = Persona::where('id', $id)->update([
                'estado'=>false,
            ]);
            DB::commit();
        }catch(Exception $e){
            return response()->json($e,400);
        }
        return response()->json($persona,200);
    }
}
