import { StyleSheet } from "react-native"
import { COLORS} from '../../contains'

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center'
    },

    box: {
        flexDirection: 'row',
        marginTop: 20,
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLORS.pink,
        paddingHorizontal: 10
    },

    img: {
        width: 100,
        height: '100%'
    }

})

export default styles