// Sidebar.jsx
import CreateTaskForm from "@/components/createTaskForm/CreateTaskForm"
import Profile from "@/components/profile/Profile"
import { Grid } from '@mui/material';

interface ISidebarProps {
    sx: {
        backgroundColor: string;
        top: number;
        alignItems: string;
        flexDirection: string;
        display: string;
        width: string;
        position: string;
        right: number;
        justifyContent: string;
        height: string;
    };
}

const SidebarComponent = (props: ISidebarProps) => (
    <Grid item md={4} sx={props.sx}>
        {/* profile-component */}
        <Profile name="Jsin111" />
        
        {/* create-task-form-component */}
        <CreateTaskForm />
        
        
    </Grid>
);

export default SidebarComponent;
