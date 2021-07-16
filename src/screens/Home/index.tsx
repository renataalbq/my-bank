import React, {useState} from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { ButtonAction } from '../../components/ButtonAction';
import { Transactions } from '../../components/Transactions';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Home() {

  const dados = [
    {
      id: '1',
      title: 'Compra no débito',
      value: 'R$ 36,00',
      desc: 'Ifd*Br',
      date: '06/07/2021'
    },
    {
      id: '2',
      title: 'Transferência recebida',
      value: 'R$ 54,00',
      desc: 'Roberto Souza Filho',
      date: '26/06/2021'
    },
    {
      id: '3',
      title: 'Transferência recebida',
      value: 'R$ 27,25',
      desc: 'TG BRASIL SERVICOS DE INTERNET',
      date: '20/06/2021'
    },
    {
      id: '4',
      title: 'Compra no débito',
      value: 'R$ 32,00',
      desc: 'Pastelão do Bessa',
      date: '19/06/2021'
    },
    {
      id: '5',
      title: 'Pagamento efetuado',
      value: 'R$ 25,00',
      desc: 'EBANX LTDA',
      date: '19/06/2021'
    },
  ];

  const [isVisible, setIsVisible] = useState(true)

  function handleToggleVisibility(){
    setIsVisible( (prevState) => !prevState )
  }

  const navigation = useNavigation();

  function handleOpenMenu(){
    navigation.navigate('Menu');
  }

  function handleTransferir(){
    navigation.navigate('Transferir');
  }

  function handlePix(){
    navigation.navigate('Pix');
  }

  return (
    <Background>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.content}>
            <Text style={styles.titleHeader}>MyBank</Text>
          </View>   
          <View>
            <TouchableOpacity onPress={handleOpenMenu}>
              <MaterialIcons 
                name="menu" 
                color="#FFFF" 
                size={48}
              />
            </TouchableOpacity>

          </View>
        </View> 

        <View style={styles.saldo}>
          <View>
            <Text style={styles.subtitle}>SALDO</Text> 
          </View>
          <View style={styles.infoHeader}>
            <Text style={styles.text}>R$ {isVisible ? '359,87' : '------'}</Text>
            <MaterialIcons 
            style={styles.viewIcon} 
            onPress={handleToggleVisibility}
            name= {isVisible ? "visibility-off" : "visibility"} 
            color="#FFFF" 
            size={33}/>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.box}> 
            <ButtonAction title={'PAGAR'}>
              <MaterialIcons name="monetization-on" color="#FFFF" size={48} style={styles.icon}/>
            </ButtonAction>

            <ButtonAction title={'TRANSFERIR'} onPress={handleTransferir}>
              <MaterialIcons name="swap-horiz" color="#FFFF" size={48} style={styles.icon}/>
            </ButtonAction>
          </View>   

          <View style={styles.box}>
            <ButtonAction title={'DEPOSITAR'}>
              <MaterialIcons name="payment" color="#FFFF" size={48} style={styles.icon}/>
            </ButtonAction>

            <ButtonAction title={'PIX'} onPress={handlePix}>
              <MaterialIcons name="add-circle" color="#FFFF" size={48} style={styles.icon}/>
            </ButtonAction>
          </View>  
        </View>

        <View>
          <ListHeader title='Transações' />
          <FlatList 
            data={dados} 
            keyExtractor={item => item.id} 
            renderItem={({item}) => (
              <Transactions data={item} />
            )} 
            ItemSeparatorComponent={() => <ListDivider />}
          />
        </View>
      </ScrollView>
    </Background>
  );  
}