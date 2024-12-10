import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from "uuid4";


const execPromisisfied = util.promisify(child_process.exec);

export const createProjectController = async (req,res)=>{

    //Create a unique id and inside the projects folder create a new folder with that id
    // Generate a new UUID
    const projectId = uuid4();
    console.log('new project id is',projectId);

    await fs.mkdir(`./projects/${projectId}`);

    //after this call the npm create vite command in the newly created project folder

    const response = await execPromisisfied('npm create vite@latest sandbox -- --template react',{
        cwd: `./projects/${projectId}`
    })




    return res.json({message: 'Project Created', data: projectId});
}