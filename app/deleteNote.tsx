import {Text, View} from "react-native";
import { Textarea } from '~/components/ui/textarea';
import { Button } from "~/components/ui/button";

export default function deleteNote() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            
            <Text>Delete Note By Name</Text>
            <Textarea/>
            <Button style={{ backgroundColor: 'white' }}>Confirm</Button>
            
        </View>
    );
}