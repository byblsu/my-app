import { BellOutlined } from "@ant-design/icons"
import { Avatar, Badge, Dropdown } from "antd"
import NoticeTabs from "./NoticeTabs"

export const Notice = () => {
    return (
        <div style={{marginRight:'40px'}}>
            <Dropdown 
                overlay={<NoticeTabs/>}
                placement="bottomRight">
        
        <Badge count={5}  offset={[10, -10]}>
        {/* <Avatar shape="square" size="large" />
         */}
            <BellOutlined style={{color: 'white'}} />

        </Badge>

            </Dropdown>
        </div>
    )
}