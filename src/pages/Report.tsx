import * as React from 'react';
import {sliderUnstyledClasses} from '@mui/base/SliderUnstyled';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Textarea from '@mui/joy/Textarea'
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import ListDivider from '@mui/joy/ListDivider';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import {addDoc, collection, doc, FieldValue, setDoc} from "firebase/firestore";

// Icons import
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import Slider from '../components/Slider';
import {ChangeEvent, useState} from "react";
import {Firestore} from "@firebase/firestore";


interface DatabaseProps {
    db: Firestore
}

export default function Report({db}: DatabaseProps) {

    const [title, setTitle] = useState('');
    const handleTitleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setTitle(event.target.value);
    };
    const [summary, setSummary] = useState('');
    const handleSummaryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSummary(event.target.value);
    };
    const [content, setContent] = useState('');
    const handleContentChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setContent(event.target.value);
    };
    const [type, setType] = useState<string>('else');
    const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
        console.log(event)
    };

    async function sendReport() {
        alert('Gửi báo cáo thành công')
        const docRef = await addDoc(collection(db, "notifications"), {
            content: content,
            title: title,
            level: type,
            timestamp: new Date(),
            summary: {
                en: summary,
            }
        });
        console.log("Document written with ID: ", docRef.id);
    }


    return <>
        <Box
            sx={{
                p: 2,
                pb: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography
                fontSize="xs2"
                textColor="text.tertiary"
                textTransform="uppercase"
                letterSpacing="md"
                fontWeight="lg"
            >
                Báo cáo
            </Typography>
            <Button size="sm" variant="plain" sx={{fontSize: 'xs', px: 1}}>
                Xoá hết
            </Button>
        </Box>
        <Box sx={{p: 2}}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="body2" textColor="text.primary">
                    Tiêu đề
                </Typography>
                <IconButton
                    size="sm"
                    variant="plain"
                    color="primary"
                    sx={{'--IconButton-size': '24px'}}
                >
                    <KeyboardArrowUpRoundedIcon fontSize="small" color="primary"/>
                </IconButton>
            </Box>
            <Box sx={{mt: 2}}>
                <TextField placeholder="Tiêu đề báo cáo của bạn"
                           value={title}
                           onChange={handleTitleChange}/>
                {/*<Box sx={{mt: 2, display: 'flex', gap: 1}}>*/}
                {/*    <Chip*/}
                {/*        variant="soft"*/}
                {/*        size="sm"*/}
                {/*        endDecorator={<ChipDelete variant="soft"/>}*/}
                {/*        sx={{'--Chip-radius': (theme) => theme.vars.radius.sm}}*/}
                {/*    >*/}
                {/*        UI designer*/}
                {/*    </Chip>*/}
                {/*</Box>*/}
            </Box>
        </Box>
        <ListDivider component="hr"/>
        <Box sx={{p: 2}}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="body2" textColor="text.primary">
                    Tóm tắt
                </Typography>
                <IconButton
                    size="sm"
                    variant="plain"
                    color="primary"
                    sx={{'--IconButton-size': '24px'}}
                >
                    <KeyboardArrowUpRoundedIcon fontSize="small" color="primary"/>
                </IconButton>
            </Box>
            <Box sx={{mt: 2}}>
                <TextField placeholder="Tóm tắt báo cáo"
                           value={summary}
                           onChange={handleSummaryChange}/>
            </Box>
        </Box>
        <ListDivider component="hr"/>
        <Box sx={{p: 2}}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="body2" textColor="text.primary">
                    Nội dung
                </Typography>
                <IconButton
                    size="sm"
                    variant="plain"
                    color="primary"
                    sx={{'--IconButton-size': '24px'}}
                >
                    <KeyboardArrowUpRoundedIcon fontSize="small" color="primary"/>
                </IconButton>
            </Box>
            <Box sx={{mt: 2}}>
                <Textarea placeholder="Nội dung báo cáo" size="lg"
                          value={content}
                          onChange={handleContentChange}/>
            </Box>
        </Box><ListDivider component="hr"/><Box sx={{p: 2}}>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Typography level="body2" textColor="text.primary">
                Loại báo cáo
            </Typography>
            <IconButton
                size="sm"
                variant="plain"
                color="primary"
                sx={{'--IconButton-size': '24px'}}
            >
                <KeyboardArrowUpRoundedIcon fontSize="small" color="primary"/>
            </IconButton>
        </Box>
        <Box sx={{mt: 2}}>
            <RadioGroup name="education" defaultValue="any"
                        value={type}
                        onChange={handleTypeChange}>
                <Radio label="Tai nạn" value="accidents" size="sm"/>
                <Radio label="Vi phạm" value="violations" size="sm"/>
                <Radio label="Ùn tắc" value="congestion" size="sm"/>
                <Radio label="Khác" value="else" size="sm"/>
            </RadioGroup>
        </Box>
    </Box><ListDivider component="hr"/><Box sx={{p: 2}}>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {/*<Typography level="body2" textColor="text.primary">*/}
            {/*    Previous experience*/}
            {/*</Typography>*/}
            <Button
                size="md"
                color="primary"
                onClick={sendReport}
            >
                Gửi báo cáo
            </Button>
        </Box>
    </Box>
    </>
}
