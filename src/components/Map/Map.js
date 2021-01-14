import React, {useState} from 'react';
import { 
    ComposableMap, 
    Geographies, 
    Geography 
} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';

const geographyStyle = {
    default: {
      outline: ''
    },
    hover: {
      fill: '#ff5f52',
      transition: 'all 250ms',
      outline: '#8e0000'
    },
    pressed: {
      outline: '#8e0000'
    }
  };
  
const INDIA_TOPO_JSON = require('../../india.topo.json');
  
const PROJECTION_CONFIG = {
    scale: 350,
    center: [78.9629, 22.5937]
};

const getHeatMapData = () => {
    return [
    { id: 'AP', state: 'Andhra Pradesh', value: 20 },
    { id: 'AR', state: 'Arunachal Pradesh', value: 20 },
    { id: 'AS', state: 'Assam', value: 20 },
    { id: 'BR', state: 'Bihar', value: 20 },
    { id: 'CT', state: 'Chhattisgarh', value: 20 },
    { id: 'GA', state: 'Goa', value: 21 },
    { id: 'GJ', state: 'Gujarat', value: 22 },
    { id: 'HR', state: 'Haryana', value: 20 },
    { id: 'HP', state: 'Himachal Pradesh', value: 24 },
    { id: 'JH', state: 'Jharkhand', value: 26 },
    { id: 'KA', state: 'Karnataka', value: 27 },
    { id: 'KL', state: 'Kerala', value: 20 },
    { id: 'MP', state: 'Madhya Pradesh', value: 20 },
    { id: 'MH', state: 'Maharashtra', value: 20 },
    { id: 'MN', state: 'Manipur', value: 20 },
    { id: 'ML', state: 'Meghalaya', value: 59 },
    { id: 'MZ', state: 'Mizoram', value: 20 },
    { id: 'NL', state: 'Nagaland', value: 59 },
    { id: 'OR', state: 'Odisha', value: 59 },
    { id: 'PB', state: 'Punjab', value: 20 },
    { id: 'RJ', state: 'Rajasthan', value: 20 },
    { id: 'SK', state: 'Sikkim', value: 20 },
    { id: 'TN', state: 'Tamil Nadu', value: 20 },
    { id: 'TG', state: 'Telangana', value: 20 },
    { id: 'TR', state: 'Tripura', value: 14 },
    { id: 'UT', state: 'Uttarakhand', value: 20 },
    { id: 'UP', state: 'Uttar Pradesh', value: 15 },
    { id: 'WB', state: 'West Bengal', value: 17 },
    { id: 'WB', state: 'West Bengal', value: 17 },
    { id: 'AN', state: 'Andaman and Nicobar Islands', value: 20 },
    { id: 'CH', state: 'Chandigarh', value: 20 },
    { id: 'DN', state: 'Dadra and Nagar Haveli', value: 19 },
    { id: 'DD', state: 'Daman and Diu', value: 20 },
    { id: 'DL', state: 'Delhi', value: 59 },
    { id: 'JK', state: 'Jammu and Kashmir', value: 25 },
    { id: 'LA', state: 'Ladakh', value: 20 },
    { id: 'LD', state: 'Lakshadweep', value: 20 },
    { id: 'PY', state: 'Puducherry', value: 20 }
  ];
};
  
export default () => {
    
    const [tooltipContent, setTooltipContent] = useState('');
    const [data, setData] = useState(getHeatMapData());

    const onMouseEnter = (geo, current = { value: 'NA' }) => {
        return () => {
            setTooltipContent(`${geo.properties.name}: ${current.value}`);
        };
    };

    const onMouseLeave = () => {
        setTooltipContent('');
    };

    const onChangeButtonClick = () => {
        setData(getHeatMapData());
    };

    return (

      <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          data-tip=""
          height={200}
          width={300}
          style={{
          }}
      >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
                const current = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={"#c62828"}
                    stroke="#8e0000"
                    strokeWidth="0.2"
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                    onClick={e => e.preventDefault()}
                  />
                );
              })
            }
          </Geographies>
      </ComposableMap>
    )
  }