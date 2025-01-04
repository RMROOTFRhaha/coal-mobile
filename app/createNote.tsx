import {Text, View} from "react-native";
import { Textarea } from '~/components/ui/textarea';
import { Button } from "~/components/ui/button";

export default function createNote() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            
            <Text>Name Your Note</Text>
            <Textarea/>
            <Text>Content</Text>
            <Textarea/>
            <Button style={{ backgroundColor: 'white' }}>Save</Button>
            
        </View>
    );
}