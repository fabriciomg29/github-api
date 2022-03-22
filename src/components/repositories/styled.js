import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #CCC;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  z-index: 999999;
  background-color: #FFF;
  margin-right: 4px;

  &:focus {
    outline: none;
  }
  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #FFF;
    ${'' /* box-shadow: 5px 3px 8px rgba(0, 0, 0, 0.5); */}
  }
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  padding: 10px;
  border: 1px solid #CCC;
  ${'' /* box-shadow: 0 0 0.3em rgba(0,0,0,0.5); */}
  margin-top: -5px;
  
  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  ${'' /* display: flex;
  justify-content: flex-start;
  flex-wrap: wrap: */}
`;