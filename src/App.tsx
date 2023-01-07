import * as React from 'react';
import {GlobalStyles} from '@mui/system';
import {CssVarsProvider, useColorScheme} from '@mui/joy/styles';
import type {Theme} from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import IconButton from '@mui/joy/IconButton';

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import FindInPageRoundedIcon from '@mui/icons-material/FindInPageRounded';
import MenuIcon from '@mui/icons-material/Menu';

// custom
import filesTheme from './theme';
import Menu from './components/Menu';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import SideList from "./components/SideList";

const ColorSchemeToggle = () => {
    const {mode, setMode} = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return <IconButton size="sm" variant="outlined" color="primary"/>;
    }
    return (
        <IconButton
            size="sm"
            variant="outlined"
            color="primary"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon/> : <LightModeRoundedIcon/>}
        </IconButton>
    );
};

interface ParentCompProps {
    childComp?: React.ReactNode;
}

export default function App(Pages: ParentCompProps) {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    return (
        <CssVarsProvider disableTransitionOnChange theme={filesTheme}>
            <GlobalStyles<Theme>
                styles={(theme) => ({
                    body: {
                        margin: 0,
                        fontFamily: theme.vars.fontFamily.body,
                    },
                })}
            />
            {drawerOpen && (
                <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
                    <Navigation/>
                </Layout.SideDrawer>
            )}
            <Layout.Root
                sx={{
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
                        md: 'minmax(160px, 300px) minmax(800px, 1fr) minmax(300px, 420px)',
                    },
                    ...(drawerOpen && {
                        height: '100vh',
                        overflow: 'hidden',
                    }),
                }}
            >
                <Layout.Header>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 1.5,
                        }}
                    >
                        <IconButton
                            variant="outlined"
                            size="sm"
                            onClick={() => setDrawerOpen(true)}
                            sx={{display: {sm: 'none'}}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <IconButton
                            size="sm"
                            variant="solid"
                            sx={{display: {xs: 'none', sm: 'inline-flex'}}}
                        >
                            <FindInPageRoundedIcon/>
                        </IconButton>
                        <Typography fontWeight={700}> Traffix </Typography>
                    </Box>
                    <TextField
                        size="sm"
                        placeholder="Tìm kiếm mọi thứ..."
                        startDecorator={<SearchRoundedIcon color="primary"/>}
                        endDecorator={
                            <IconButton variant="outlined" size="sm" color="neutral">
                                <Typography fontWeight="lg" fontSize="sm" textColor="text.tertiary">
                                    /
                                </Typography>
                            </IconButton>
                        }
                        sx={{
                            flexBasis: '500px',
                            display: {
                                xs: 'none',
                                sm: 'flex',
                            },
                        }}
                    />
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: 1.5}}>
                        <IconButton
                            size="sm"
                            variant="outlined"
                            color="primary"
                            sx={{display: {xs: 'inline-flex', sm: 'none'}}}
                        >
                            <SearchRoundedIcon/>
                        </IconButton>
                        <Menu
                            id="app-selector"
                            control={
                                <IconButton
                                    size="sm"
                                    variant="outlined"
                                    color="primary"
                                    aria-label="Apps"
                                >
                                    <GridViewRoundedIcon/>
                                </IconButton>
                            }
                            menus={[
                                {label: 'Email', component: 'a', href: '/joy-ui/templates/email/'},
                                {label: 'Team', component: 'a', href: '/joy-ui/templates/team/'},
                                {label: 'Files', active: true},
                            ]}
                        />
                        <ColorSchemeToggle/>
                    </Box>
                </Layout.Header>
                <Layout.SideNav>
                    <Navigation/>
                </Layout.SideNav>
                <Layout.Main>
                    {Pages.childComp}
                </Layout.Main>
                <SideList/>
            </Layout.Root>
        </CssVarsProvider>
    );
}