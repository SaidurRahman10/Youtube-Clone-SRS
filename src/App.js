import { Box } from '@mui/system';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feed, ChannelDetail, Navbar, SearchFeed,  VideoDetail}  from './Components'


const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{backgroundColor: '#000'}}>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Feed />} />
                    <Route path='/video/:id' element={<VideoDetail />}/>
                    <Route path='/channel/:id' element={<ChannelDetail />}/>
                    <Route path='/search/:searchTerm' element={<SearchFeed />}/>
                </Routes>
            </Box>
        </BrowserRouter>
    );
};

export default App;