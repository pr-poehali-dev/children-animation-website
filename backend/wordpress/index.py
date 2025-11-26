import json
import os
from typing import Dict, Any, List, Optional
from urllib.request import urlopen, Request
from urllib.error import HTTPError, URLError

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: WordPress REST API интеграция для получения персонажей, отзывов и услуг
    Args: event - dict с httpMethod, queryStringParameters (type: characters|reviews|services)
          context - объект с атрибутами request_id, function_name
    Returns: HTTP response с данными из WordPress или локальными данными
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    params = event.get('queryStringParameters') or {}
    data_type = params.get('type', 'characters')
    
    wordpress_url = os.environ.get('WORDPRESS_API_URL', '')
    
    if wordpress_url and wordpress_url.strip():
        try:
            endpoint_map = {
                'characters': f'{wordpress_url}/wp/v2/characters',
                'reviews': f'{wordpress_url}/wp/v2/reviews',
                'services': f'{wordpress_url}/wp/v2/services'
            }
            
            endpoint = endpoint_map.get(data_type)
            if not endpoint:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Invalid type parameter'})
                }
            
            req = Request(endpoint, headers={'User-Agent': 'LyaLyaBuBu/1.0'})
            with urlopen(req, timeout=10) as response:
                wp_data = json.loads(response.read().decode('utf-8'))
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'source': 'wordpress',
                        'data': wp_data
                    })
                }
        
        except (HTTPError, URLError, TimeoutError) as e:
            pass
    
    fallback_data = {
        'characters': [
            {
                'id': 1,
                'name': 'Мишка Тедди',
                'description': 'Добрый и обаятельный медвежонок',
                'emoji': '🧸',
                'age': '3-8 лет',
                'color': 'bg-amber-100'
            },
            {
                'id': 2,
                'name': 'Единорожка Луна',
                'description': 'Волшебная лошадка с рогом',
                'emoji': '🦄',
                'age': '4-10 лет',
                'color': 'bg-purple-100'
            },
            {
                'id': 3,
                'name': 'Зайка Пушок',
                'description': 'Весёлый и активный зайчик',
                'emoji': '🐰',
                'age': '2-7 лет',
                'color': 'bg-pink-100'
            },
            {
                'id': 4,
                'name': 'Котик Мурзик',
                'description': 'Игривый и ласковый котёнок',
                'emoji': '🐱',
                'age': '3-9 лет',
                'color': 'bg-orange-100'
            }
        ],
        'reviews': [
            {
                'id': 1,
                'name': 'Анна Петрова',
                'text': 'Заказывали Единорожку на день рождения дочки. Дети в восторге!',
                'rating': 5,
                'avatar': '👩'
            },
            {
                'id': 2,
                'name': 'Михаил Сидоров',
                'text': 'Мишка Тедди покорил сердце нашего сына! Весь праздник прошёл на ура.',
                'rating': 5,
                'avatar': '👨'
            },
            {
                'id': 3,
                'name': 'Елена Кузнецова',
                'text': 'Очень довольны качеством работы! Зайка Пушок был невероятно милым.',
                'rating': 5,
                'avatar': '👩‍🦰'
            }
        ],
        'services': [
            {
                'id': 1,
                'title': 'День рождения',
                'description': 'Полная программа развлечений с играми и конкурсами',
                'price': 'от 5000 ₽',
                'duration': '1-2 часа',
                'icon': 'Cake'
            },
            {
                'id': 2,
                'title': 'Детский праздник',
                'description': 'Выступление персонажей на школьных и садиковских праздниках',
                'price': 'от 4000 ₽',
                'duration': '1 час',
                'icon': 'PartyPopper'
            },
            {
                'id': 3,
                'title': 'Корпоратив',
                'description': 'Развлечение детей на корпоративных мероприятиях',
                'price': 'от 6000 ₽',
                'duration': '1-3 часа',
                'icon': 'Users'
            },
            {
                'id': 4,
                'title': 'Фотосессия',
                'description': 'Ростовая кукла для фото и видео',
                'price': 'от 3000 ₽',
                'duration': '30 минут',
                'icon': 'Camera'
            }
        ]
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'source': 'fallback',
            'data': fallback_data.get(data_type, [])
        })
    }
