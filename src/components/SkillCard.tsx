import React from "react";
import { 
    TouchableOpacity, 
    Text, 
    StyleSheet,
    TouchableOpacityProps
} from 'react-native'


type SkillCardProps = {
    skill: string
} & TouchableOpacityProps


export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {

    return(
        <TouchableOpacity 
            style={styles.skillButton}
            {...rest}
        >
            <Text style={styles.skillText}>
                { skill }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    skillButton: {
        backgroundColor: '#1F1E25',
        borderRadius: 50,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
    },
    skillText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    }
})