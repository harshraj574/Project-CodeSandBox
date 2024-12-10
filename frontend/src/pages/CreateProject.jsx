import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"
import { Button , Layout, Flex } from 'antd';

const { Header, Footer, Content } = Layout;

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
  };

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };

  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };
  
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };

export const CreateProject = ()=>{

        const { createProjectMutation } = useCreateProject();

        async function handleCreateProject() {
            console.log("going to trigger the api");
            try{
                await createProjectMutation();
                console.log("now we should re-direct to the editor");

            }catch(err){
                console.log("Error creating project",err);
            }
            
        }

    return(
        <>
        <Flex justify="center" align="center">
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <h1>Create Project</h1>
            </Header>
            <Content style={contentStyle}>
                <Button 
                onClick={handleCreateProject}
                >
                Create Playground
                </Button>
                </Content>
                <Footer style={footerStyle}>
                   Footer 
                </Footer>
        </Layout>
        </Flex>

        </>
    )

}