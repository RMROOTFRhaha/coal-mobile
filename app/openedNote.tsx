import {Text, View} from "react-native";
import { Textarea } from '~/components/ui/textarea';
import { Button } from "~/components/ui/button";

export default function openedNote() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >

            <Text>Rewrite Your Note Below!</Text>
            <Textarea/>
            
        </View>
    );
}