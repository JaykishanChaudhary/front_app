import Layout from "../layout/layout"
import CreateForm from "../createform/createform"
import Dashboard from "../dashboard/dashboard"


function CreateTask(){
    return <>
        <Layout/>
        <Dashboard/>
        <CreateForm/>
    </>
}

export default CreateTask