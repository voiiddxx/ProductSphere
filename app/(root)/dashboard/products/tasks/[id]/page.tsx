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
    <div>
        <p>this is task page</p>
    </div>
  )
}

export default page