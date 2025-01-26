import { Appbar } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

export default function CustomNavigationBar({ navigation, back, route, options }) {
    const title = getHeaderTitle(options, route.name);

    const handleForwardPress = () => {
        navigation.navigate('Second Screen');
    };

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} />
            {!back ? <Appbar.Action icon="arrow-right" onPress={handleForwardPress} /> : null}
        </Appbar.Header>
    );
}