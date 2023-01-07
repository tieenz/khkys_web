import List from "@mui/joy/List";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Typography from "@mui/joy/Typography";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Button from "@mui/joy/Button";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Chip from "@mui/joy/Chip";
import * as React from "react";

export default function SideList() {
    return (
        <List
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 2,
            }}
        >
            <Sheet
                component="li"
                variant="outlined"
                sx={{
                    bgcolor: 'background.componentBg',
                    borderRadius: 'sm',
                    p: 2,
                    listStyle: 'none',
                }}
            >
                <Box sx={{display: 'flex', gap: 2}}>
                    <Avatar
                        src="/static/images/avatar/1.jpg"
                        sx={{borderRadius: 'sm'}}
                    />
                    <Box>
                        <Typography>Đường Ngô Quyền</Typography>
                        <Typography level="body3">Quá tải</Typography>
                    </Box>
                </Box>
                <ListDivider component="div" sx={{my: 2}}/>
                <List sx={{'--List-decorator-width': '48px'}}>
                    <ListItem sx={{alignItems: 'flex-start'}}>
                        <ListItemDecorator
                            sx={{
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    height: '100%',
                                    width: '2px',
                                    bgcolor: 'divider',
                                    left: 'calc(var(--List-item-paddingLeft) + 15px)',
                                    top: '50%',
                                },
                            }}
                        >
                            <Avatar
                                size="sm"
                                src="https://cdn-icons-png.flaticon.com/512/4284/4284792.png"
                            />
                        </ListItemDecorator>
                        <ListItemContent>
                            <Typography level="body2">Kẹt đường vì chen lấn</Typography>
                        </ListItemContent>
                        <Typography level="body2">17.43 hôm qua</Typography>
                    </ListItem>
                    <ListItem sx={{alignItems: 'flex-start'}}>
                        <ListItemDecorator>
                            <Avatar
                                size="sm"
                                src="https://cdn-icons-png.flaticon.com/512/3721/3721924.png"
                            />
                        </ListItemDecorator>
                        <ListItemContent>
                            <Typography level="body2">Giờ cao điểm Container</Typography>
                        </ListItemContent>
                        <Typography level="body2">8h hôm qua</Typography>
                    </ListItem>
                </List>
                <Button
                    size="sm"
                    variant="plain"
                    sx={{px: 1, mt: 1}}
                >
                    Chi tiết
                </Button>
                <ListDivider component="div" sx={{my: 2}}/>
                <Typography fontSize="sm">Thẻ:</Typography>
                <Box sx={{mt: 1.5, display: 'flex', gap: 1}}>
                    <Chip
                        variant="outlined"
                        color="neutral"
                        size="sm"
                        sx={{borderRadius: 'sm'}}
                    >
                        Sơn Trà
                    </Chip>
                    <Chip
                        variant="outlined"
                        color="neutral"
                        size="sm"
                        sx={{borderRadius: 'sm'}}
                    >
                        Tuyến đường trọng điểm
                    </Chip>
                </Box>
            </Sheet>
            <Sheet
                component="li"
                variant="outlined"
                sx={{
                    bgcolor: 'background.componentBg',
                    borderRadius: 'sm',
                    p: 2,
                    listStyle: 'none',
                }}
            >
                <Box sx={{display: 'flex', gap: 2}}>
                    <Avatar
                        src="/static/images/avatar/1.jpg"
                        sx={{borderRadius: 'sm'}}
                    />
                    <Box>
                        <Typography>Đường Võ Nguyên Giáp</Typography>
                        <Typography level="body3">Thông thoáng</Typography>
                    </Box>
                </Box>
                <ListDivider component="div" sx={{my: 2}}/>
                <List sx={{'--List-decorator-width': '48px'}}>
                    {/*<ListItem sx={{alignItems: 'flex-start'}}>*/}
                    {/*    <ListItemDecorator*/}
                    {/*        sx={{*/}
                    {/*            '&:before': {*/}
                    {/*                content: '""',*/}
                    {/*                position: 'absolute',*/}
                    {/*                height: '100%',*/}
                    {/*                width: '2px',*/}
                    {/*                bgcolor: 'divider',*/}
                    {/*                left: 'calc(var(--List-item-paddingLeft) + 15px)',*/}
                    {/*                top: '50%',*/}
                    {/*            },*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <Avatar*/}
                    {/*            size="sm"*/}
                    {/*            src="https://seeklogo.com/images/D/dribbble-logo-143FF96D65-seeklogo.com.png"*/}
                    {/*        />*/}
                    {/*    </ListItemDecorator>*/}
                    {/*    <ListItemContent>*/}
                    {/*        <Typography level="body2">Senior designer</Typography>*/}
                    {/*        <Typography level="body3">Dribbble</Typography>*/}
                    {/*    </ListItemContent>*/}
                    {/*    <Typography level="body2">2015-now</Typography>*/}
                    {/*</ListItem>*/}
                    {/*<ListItem sx={{alignItems: 'flex-start'}}>*/}
                    {/*    <ListItemDecorator>*/}
                    {/*        <Avatar*/}
                    {/*            size="sm"*/}
                    {/*            src="https://seeklogo.com/images/P/pinterest-logo-CA98998DCB-seeklogo.com.png"*/}
                    {/*        />*/}
                    {/*    </ListItemDecorator>*/}
                    {/*    <ListItemContent>*/}
                    {/*        <Typography level="body2">Desinger</Typography>*/}
                    {/*        <Typography level="body3">Pinterest</Typography>*/}
                    {/*    </ListItemContent>*/}
                    {/*    <Typography level="body2">2012-2015</Typography>*/}
                    {/*</ListItem>*/}
                </List>
                <Button
                    size="sm"
                    variant="plain"
                    sx={{px: 1, mt: 1}}
                >
                    Chi tiết
                </Button>
                <ListDivider component="div" sx={{my: 2}}/>
                <Typography fontSize="sm">Thẻ:</Typography>
                <Box sx={{mt: 1.5, display: 'flex', gap: 1}}>
                    <Chip
                        variant="outlined"
                        color="neutral"
                        size="sm"
                        sx={{borderRadius: 'sm'}}
                    >
                        Sơn Trà
                    </Chip>
                    <Chip
                        variant="outlined"
                        color="neutral"
                        size="sm"
                        sx={{borderRadius: 'sm'}}
                    >
                        Ven biển
                    </Chip>
                </Box>
            </Sheet>
        </List>
    );
};