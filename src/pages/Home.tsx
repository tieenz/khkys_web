import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Modal from "@mui/joy/Modal";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import React from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options1 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Khu vực cầu Rồng',
        },
    },
};

const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Khu vực cầu sông Hàn',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({min: 0, max: 1000})),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function () {
    const [open, setOpen] = React.useState([false, false]);

    return (
        <>
            <Modal
                open={open[0]}
                onClose={
                    () => {
                        setOpen([false, false])
                    }
                }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 1200,
                    height: 600,
                    bgcolor: 'white',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Bar options={options1} data={data}/>;
                </Box>
            </Modal>
            <Modal
                open={open[1]}
                onClose={
                    () => {
                        setOpen([false, false])
                    }
                }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 1200,
                    height: 600,
                    bgcolor: 'white',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Bar options={options2} data={data}/>;
                </Box>
            </Modal>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 2,
                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        borderRadius: 'sm',
                        gridColumn: '1/-1',
                        bgcolor: 'background.componentBg',
                        display: {xs: 'none', sm: 'grid'},
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        '& > *': {
                            p: 2,
                            '&:nth-of-child(n):not(:nth-last-of-child(-n+4))': {
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            },
                        },
                    }}
                >
                    <Typography level="body3" fontWeight="md" noWrap>
                        Tuyến đường trọng điểm gần đây
                    </Typography>
                    <Typography level="body3" fontWeight="md" noWrap>
                        Cập nhật mới nhất
                    </Typography>
                    <Typography level="body3" fontWeight="md" noWrap>
                        Tình trạng
                    </Typography>
                    <Typography level="body3" fontWeight="md" noWrap>
                        Chỉ dẫn bản đồ
                    </Typography>

                    <Typography
                        level="body2"
                        startDecorator={<FolderOpenIcon color="primary"/>}
                        sx={{alignItems: 'flex-start'}}
                    >
                        Trần Hưng Đạo
                    </Typography>
                    <Typography level="body2">21 / 9 / 2022 - 14 : 25 : 22</Typography>
                    <Typography level="body2" sx={{color: 'success.600'}}>
                        Thông thoáng
                    </Typography>
                    <Box>

                    </Box>

                    <Typography
                        level="body2"
                        startDecorator={<FolderOpenIcon color="primary"/>}
                        sx={{alignItems: 'flex-start'}}
                    >
                        Ngô Quyền
                    </Typography>
                    <Typography level="body2">26 / 9 / 2022 - 21 : 07 : 05 </Typography>
                    <Typography level="body2" sx={{color: 'success.600'}}>
                        Giờ cao điểm
                    </Typography>
                    <Box>

                    </Box>
                </Sheet>
                <Card
                    sx={{
                        '--Card-radius': (theme) => theme.vars.radius.sm,
                        boxShadow: 'none',
                    }}
                    onClick={() => {
                        setOpen([true, false]);
                    }}
                >
                    <CardCover>
                        <img
                            alt=""
                            src="https://statics.vinpearl.com/cau-rong-da-nang-5_1629438869.png"
                        />
                    </CardCover>
                    <CardCover
                        sx={{
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.12))',
                        }}
                    />
                    <CardContent
                        sx={{
                            mt: 'auto',
                            flexGrow: 0,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{flex: 1}}>
                            <Typography textColor="#fff">Khu vực cầu Rồng</Typography>
                            <Typography
                                level="body3"
                                mt={0.5}
                                textColor="rgba(255,255,255,0.72)"
                            >
                                Đang hoạt động
                            </Typography>
                        </Box>
                        <IconButton variant="plain" color="neutral" sx={{color: '#fff'}}>
                            <EditOutlinedIcon/>
                        </IconButton>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        '--Card-radius': (theme) => theme.vars.radius.sm,
                        boxShadow: 'none',
                    }}
                    onClick={() => {
                        setOpen([false, true]);
                    }}
                >
                    <CardCover>
                        <img
                            alt=""
                            src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/07/cau-quay-song-han-khi-anh-den-ruc-ro.jpg"
                        />
                    </CardCover>
                    <CardCover
                        sx={{
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.12))',
                        }}
                    />
                    <CardContent
                        sx={{
                            mt: 'auto',
                            flexGrow: 0,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{flex: 1}}>
                            <Typography textColor="#fff">Khu vực cầu sông Hàn</Typography>
                            <Typography
                                level="body3"
                                mt={0.5}
                                textColor="rgba(255,255,255,0.72)"
                            >
                                Đang hoạt động
                            </Typography>
                        </Box>
                        <IconButton variant="plain" color="neutral" sx={{color: '#fff'}}>
                            <EditOutlinedIcon/>
                        </IconButton>
                    </CardContent>
                </Card>
                <Card
                    variant="outlined"
                    sx={{
                        '--Card-radius': (theme) => theme.vars.radius.sm,
                        bgcolor: 'background.componentBg',
                        boxShadow: 'none',
                    }}
                >
                    <CardOverflow
                        sx={{
                            borderBottom: '1px solid',
                            borderColor: 'neutral.outlinedBorder',
                        }}
                    >
                        <AspectRatio ratio="16/9" color="primary">
                            <Typography
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'primary.plainColor',
                                }}
                            >
                                Bảo trì
                            </Typography>
                        </AspectRatio>
                    </CardOverflow>
                    <Box sx={{pt: 2, display: 'flex', alignItems: 'center'}}>
                        <Box sx={{flex: 1}}>
                            <Typography>Quảng trường</Typography>
                            <Typography level="body3" mt={0.5}>
                                Tạm dừng
                            </Typography>
                        </Box>
                        <IconButton variant="plain" color="neutral">
                            <EditOutlinedIcon/>
                        </IconButton>
                    </Box>
                </Card>
            </Box>
        </>
    );
}
