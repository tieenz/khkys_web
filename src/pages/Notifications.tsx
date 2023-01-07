import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import {collection, query, where, onSnapshot} from "firebase/firestore";
import {Firestore} from "@firebase/firestore";
import {useState} from "react";
import {Divider} from "@mui/material";

interface DatabaseProps {
    db: Firestore
}

export default function Notifications({db}: DatabaseProps) {

    const [notifications, setNotifications] = useState<any[]>([]);
    const [reports, setReports] = useState<any[]>([]);

    const notifications_query = query(collection(db, "notifications"));
    onSnapshot(notifications_query, (querySnapshot) => {
        const new_notifications: object[] = [];
        querySnapshot.forEach((doc) => {
            new_notifications.push(doc.data());
        });
        setNotifications(new_notifications);
    });

    const reports_query = query(collection(db, "reports"));
    onSnapshot(reports_query, (querySnapshot) => {
        const new_reports: object[] = [];
        querySnapshot.forEach((doc) => {
            new_reports.push(doc.data());
        });
        setReports(new_reports);
    });


    return (
        <>

            <List>
                {notifications.map((notification) => (
                    <>
                        <ListItem>
                            <ListItemButton variant="soft" color="primary" sx={{p: 2}}>
                                <ListItemDecorator sx={{alignSelf: 'flex-start'}}>
                                    <Box
                                        component="img"
                                        src={notification['image']}
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '8px',
                                        }}/>
                                </ListItemDecorator>
                                <Box sx={{pl: 2, width: '100%'}}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            mb: 0.5,
                                        }}
                                    >
                                        <Typography level="body3">Alex Jonnold</Typography>
                                        <Typography level="body3" textColor="text.tertiary">
                                            21 Oct 2022
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{mb: 0.5}}>
                                            {notification["title"]}
                                        </Typography>
                                        <Typography level="body2">
                                            {notification["content"]}
                                        </Typography>
                                    </Box>
                                </Box>
                            </ListItemButton>
                        </ListItem>
                        <ListDivider sx={{m: 0}}/>
                    </>
                ))}
            </List>
            <Divider/>
            <List>
                {reports.map((report) => (
                    <>
                        <ListItem>
                            <ListItemButton variant="soft" color="primary" sx={{p: 2}}>
                                <ListItemDecorator sx={{alignSelf: 'flex-start'}}>
                                    <Box
                                        component="img"
                                        src={report["image"]}
                                        sx={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: '8px',
                                        }}/>
                                </ListItemDecorator>
                                <Box sx={{pl: 2, width: '100%'}}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            mb: 0.5,
                                        }}
                                    >
                                        <Typography level="body3">Alex Jonnold</Typography>
                                        <Typography level="body3" textColor="text.tertiary">
                                            21 Oct 2022
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{mb: 0.5}}>
                                            {report["title"]}
                                        </Typography>
                                        <Typography level="body2">
                                            {report["description"]}
                                        </Typography>
                                    </Box>
                                </Box>
                            </ListItemButton>
                        </ListItem>
                        <ListDivider sx={{m: 0}}/>
                    </>
                ))}
            </List>
        </>
    );
}
