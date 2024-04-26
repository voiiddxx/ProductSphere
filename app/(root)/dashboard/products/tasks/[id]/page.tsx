import TaskstatusComponents from '@/components/shared/TaskstatusComponents';
import { getTaskAspertaskId } from '@/lib/actions/task.action'
import React from 'react'

const page = async ({
    params:{ id },
  } : {params:{
    id : string
  }}) => {

    const taskData = await getTaskAspertaskId(+id);
    console.log("This is taskdata" , taskData);
    

  return (
    <div className='min-h-screen w-full flex justify-center items-center flex-col' >
     
      <TaskstatusComponents taskId={taskData.data.assignId} />
    </div>
  )
}

export default page