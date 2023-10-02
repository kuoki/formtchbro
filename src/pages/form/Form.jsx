import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useChairManagement } from '../../context/useChairManagement';


const Form = () => {
  const chairsData = [
    { id: 1, name: 'Silla Comedor', material: 'Madera' },
    { id: 2, name: 'Silla Jardín', material: 'Metal' },
    { id: 3, name: 'Silla Barra', material: 'Piedra' },
  ]

  const [newChairsData, newChairsDataSet] = useState(chairsData)

  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm();
  const { chairs, actions } = useChairManagement();

  const onSubmit = handleSubmit((data) => {
    const newChair = ({
      id: chairs.length + 1,
      name: data.name,
      material: data.material
    });
    actions?.saveChair(newChair);
    reset();
    console.log(chairs, "soy chairs")
  });

  return (
    
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="nameChair">Name</label>
          <input type="text" className="form-control" id="nameChair" placeholder="Name"
            {...register('name', { required: true })} />
        </div>
        {errors.name && (
          <div className="row">
            <div className="col-12">
              <span>Nombre es requerido</span>
            </div>
          </div>)
        }
        <div className="form-group mt-4">
          <label htmlFor="materialChair">Material</label>
          <input type="text" className="form-control" id="materialChair" placeholder="Material"
            {...register('material', { required: true })} />
        </div>
        {errors.material && (<div className="row">
          <div className="col-12">
            <span>Material es requerido</span>
          </div>
        </div>)}
        <div className="row mb-3 mt-3">
          <div className="col-12">
            <button type="submit" className="btn btn-dark px-5 mt-3" disabled={!isDirty || !isValid}>Add</button>
          </div>
        </div>
      </form>
      
  );
};

export default Form;