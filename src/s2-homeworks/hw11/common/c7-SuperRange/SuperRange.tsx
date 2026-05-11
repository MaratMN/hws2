import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{  width: 300,
                color: '#1976d2',
                '& .MuiSlider-thumb': {
                    borderRadius: '50%',
                    backgroundColor: '#1976d2',
                    '&:hover': {
                        boxShadow: '0 0 0 8px rgba(25, 118, 210, 0.16)',
                    },
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#1976d2',
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#bdbdbd',
                },// стили для слайдера // пишет студент
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
