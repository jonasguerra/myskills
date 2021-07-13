import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList
} from "react-native"

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

type SkillData = {
    id: string;
    name: string;
    date?: Date;
}

export const Home = () => {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState<SkillData[]>([])
    const [greeting, setGreeting] = useState('')

    function handleNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        console.log(data)
        setMySkills([...mySkills, data])
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldState => oldState.filter(
            skill => ( skill.id != id )
        ))
    }

    function handleEditTask(id: string){
        
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour < 12){
            setGreeting('Good Morning')
        }else if(currentHour >= 12 && currentHour < 18){
            setGreeting('Good Afternoon')
        }else if(currentHour >= 18 && currentHour < 24){
            setGreeting('Good Night')
        }
    }, [])

    return(
        <View style={styles.container}>

            <Text style={styles.title}> 
                Welcome, Jonas
            </Text>

            <Text style={styles.greeting}> 
                { greeting }
            </Text>

            <TextInput style={styles.input}
                placeholder='New Skill'
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button 
                onPress={handleNewSkill}
                title="Add"
                
            />

            <Text style={[styles.title, { marginVertical: 20 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard 
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        color: '#FFF',
        backgroundColor: '#1F1E25',
        marginTop: 30,
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7,
    },
    greeting: {
        color: '#FFF',
        fontSize: 14,
    }
})