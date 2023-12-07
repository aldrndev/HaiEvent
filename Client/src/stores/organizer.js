import axios from 'axios'
import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

// const BASE_URL = 'https://isproject.my.id'
const BASE_URL = 'http://localhost:3000'

export const useOrganizerStore = defineStore('organizer', {
  state() {
    return {
      dataCategory: [],
      dataEvent: [],
      eventDetail: {}
    }
  },
  actions: {
    async showCategories() {
      try {
        const { data } = await axios({
          url: `${BASE_URL}/organizer/category`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.dataCategory = data.getCategory
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error')
      }
    },
    async createEvent(dataEvent) {
      try {
        const formData = new FormData()
        formData.append('imageUrl', dataEvent.imageUrl)
        formData.append('startDate', dataEvent.startDate)
        formData.append('endDate', dataEvent.endDate)
        formData.append('startTime', dataEvent.startTime)
        formData.append('endTime', dataEvent.endTime)
        formData.append('eventName', dataEvent.eventName)
        formData.append('category', dataEvent.category)
        formData.append('ticketType1', dataEvent.ticketType1)
        formData.append('ticketPrice1', dataEvent.ticketPrice1)
        formData.append('ticketType2', dataEvent.ticketType2)
        formData.append('ticketPrice2', dataEvent.ticketPrice2)
        formData.append('ticketType3', dataEvent.ticketType3)
        formData.append('ticketPrice3', dataEvent.ticketPrice3)
        formData.append('address', dataEvent.address)
        formData.append('country', dataEvent.country)
        formData.append('province', dataEvent.province)
        formData.append('city', dataEvent.city)
        formData.append('postalCode', dataEvent.postalCode)
        formData.append('latitude', dataEvent.latitude)
        formData.append('longitude', dataEvent.longitude)
        formData.append('description', dataEvent.description)
        formData.append('categories', dataEvent.categories)
        formData.append('stock1', dataEvent.stock1)
        formData.append('stock2', dataEvent.stock2)
        formData.append('stock3', dataEvent.stock3)

        const { data } = await axios({
          url: `${BASE_URL}/organizer/add-event`,
          method: 'POST',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: formData
        })

        Swal.fire('Success', data.message, 'success')
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error')
      }
    },

    async showEvent() {
      try {
        const { data } = await axios({
          url: `${BASE_URL}/buyer/event`,
          method: 'GET'
        })
        this.dataEvent = data.getEvent
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error')
      }
    },
    async showEventDetail(eventId) {
      try {
        const { data } = await axios({
          url: `${BASE_URL}/buyer/event/detail/${eventId}`,
          method: 'GET'
        })
        this.eventDetail = data.checkEvent
        this.router.push({ name: 'eventDetailPage', params: { eventId: eventId } })
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error')
      }
    }
  }
})
