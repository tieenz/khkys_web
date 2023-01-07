import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

// Icons import
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ReportIcon from '@mui/icons-material/Report';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

// Router
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <List size="sm" sx={{'--List-item-radius': '8px'}}>
            <ListItem nested sx={{p: 0}}>
                <Box
                    sx={{
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        id="nav-list-browse"
                        textColor="neutral.500"
                        fontWeight={700}
                        sx={{
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '.1rem',
                        }}
                    >
                        Trang
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="plain"
                        color="primary"
                        sx={{'--IconButton-size': '24px'}}
                    >
                        <KeyboardArrowDownRoundedIcon fontSize="small" color="primary"/>
                    </IconButton>
                </Box>
                <List
                    aria-labelledby="nav-list-browse"
                    sx={{
                        '& .JoyListItemButton-root': {p: '8px'},
                    }}
                >
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemButton variant="soft" color="primary">
                                <ListItemDecorator sx={{color: 'inherit'}}>
                                    <FolderOpenIcon fontSize="small"/>
                                </ListItemDecorator>
                                <ListItemContent>
                                    Trang chủ
                                </ListItemContent>

                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/map" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemDecorator sx={{color: 'neutral.500'}}>
                                    <ShareOutlinedIcon fontSize="small"/>
                                </ListItemDecorator>
                                <ListItemContent>
                                    Bản đồ
                                </ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/notifications" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemDecorator sx={{color: 'neutral.500'}}>
                                    <CircleNotificationsIcon fontSize="small"/>
                                </ListItemDecorator>
                                <ListItemContent>Thông báo</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/report" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemDecorator sx={{color: 'neutral.500'}}>
                                    <ReportIcon fontSize="small"/>
                                </ListItemDecorator>
                                <ListItemContent>Báo cáo</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="/chart" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemDecorator sx={{color: 'neutral.500'}}>
                                    <StackedLineChartIcon fontSize="small"/>
                                </ListItemDecorator>
                                <ListItemContent>Dữ liệu</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                </List>
            </ListItem>
            <ListItem nested>
                <Box
                    sx={{
                        mt: 2,
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        id="nav-list-tags"
                        textColor="neutral.500"
                        fontWeight={700}
                        sx={{
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '.1rem',
                        }}
                    >
                        Tuyến đường
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="plain"
                        color="primary"
                        sx={{'--IconButton-size': '24px'}}
                    >
                        <KeyboardArrowDownRoundedIcon fontSize="small" color="primary"/>
                    </IconButton>
                </Box>
                <List
                    aria-labelledby="nav-list-tags"
                    size="sm"
                    sx={{
                        '--List-decorator-width': '32px',
                        '& .JoyListItemButton-root': {p: '8px'},
                    }}
                >
                    <ListItem>
                        <ListItemButton>
                            <ListItemDecorator>
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '99px',
                                        bgcolor: 'primary.300',
                                    }}
                                />
                            </ListItemDecorator>
                            <ListItemContent>Trần Hưng Đạo</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemDecorator>
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '99px',
                                        bgcolor: 'danger.400',
                                    }}
                                />
                            </ListItemDecorator>
                            <ListItemContent>Nguyến Tất Thành</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemDecorator>
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '99px',
                                        bgcolor: 'warning.500',
                                    }}
                                />
                            </ListItemDecorator>
                            <ListItemContent>Núi Thành</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemDecorator>
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '99px',
                                        bgcolor: 'success.400',
                                    }}
                                />
                            </ListItemDecorator>
                            <ListItemContent>Trưng Nữ Vương</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
            </ListItem>
            <ListItem nested>
                <Box
                    sx={{
                        mt: 2,
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        id="nav-list-tags"
                        textColor="neutral.500"
                        fontWeight={700}
                        sx={{
                            fontSize: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: '.1rem',
                        }}
                    >
                        Camera
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="plain"
                        color="primary"
                        sx={{'--IconButton-size': '24px'}}
                    >
                        <KeyboardArrowDownRoundedIcon fontSize="small" color="primary"/>
                    </IconButton>
                </Box>
                <List
                    aria-labelledby="nav-list-tags"
                    size="sm"
                    sx={{
                        '--List-decorator-width': '32px',
                        '& .JoyListItemButton-root': {p: '8px'},
                    }}
                >
                    <Link to="/cam42069" style={{textDecoration: 'none'}}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemDecorator>
                                    <Box
                                        sx={{
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '99px',
                                            bgcolor: 'primary.300',
                                        }}
                                    />
                                </ListItemDecorator>
                                <ListItemContent>#42069</ListItemContent>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <ListItem>
                        <ListItemButton>
                            <ListItemDecorator>
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '99px',
                                        bgcolor: 'danger.400',
                                    }}
                                />
                            </ListItemDecorator>
                            <ListItemContent>#42424</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemDecorator>
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '99px',
                                        bgcolor: 'warning.500',
                                    }}
                                />
                            </ListItemDecorator>
                            <ListItemContent>#220205</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemDecorator>
                                <Box
                                    sx={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '99px',
                                        bgcolor: 'success.400',
                                    }}
                                />
                            </ListItemDecorator>
                            <ListItemContent>#222222</ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
            </ListItem>
        </List>
    );
}
