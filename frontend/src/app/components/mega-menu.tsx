import React, { useState } from "react";
import { Box, Divider, Drawer, IconButton, MenuItem, Toolbar } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

const MegaMenu: React.FC = () => {
    const [open, setOpen] = useState(false);
   
    return(
        <Box>
            <Toolbar>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuOutlined/>
                </IconButton>
            </Toolbar>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Divider>
                    <MenuItem>Need Help?</MenuItem>
                    <MenuItem>Account</MenuItem>
                    <MenuItem>Orders</MenuItem>
                    <MenuItem>Inbox</MenuItem>
                    <MenuItem>Saved Items</MenuItem>
                </Divider>
                
                <Divider>
                    <h5>Categories</h5>
                    <MenuItem>Clothing</MenuItem>
                    <MenuItem>Beauty And Hair</MenuItem>
                    <MenuItem>Fabrics</MenuItem>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Art</MenuItem>
                </Divider>
                

            </Drawer>

        </Box>

        
        
    )
}

export default MegaMenu;