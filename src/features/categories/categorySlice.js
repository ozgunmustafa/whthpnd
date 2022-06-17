import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import CategoryService from '../../services/CategoryService'

const initialState = {
  data: [
    {
      id: 1,
      publisher: {
        name: 'Fosinopril sodium',
        username: 'fosodium'
      },
      category: 'Marketing',
      gender: 'Female',
      question:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
      comments: [
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: false,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      }
    },
    {
      id: 2,
      publisher: {
        name: 'Lamb Quarters',
        username: 'lambQua'
      },
      category: 'Research and Development',
      gender: 'Female',
      question: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      comments: [
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: true,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      }
    },
    {
      id: 3,
      publisher: {
        name: 'Rromethazine Quarters',
        username: 'promethazine'
      },
      category: 'Engineering',
      gender: 'Female',
      question:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      comments: [
        {
          publisher: 'LATANOPROST',
          gender: 'Male',
          question:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
        },
        {
          publisher: 'ustilago maydis',
          gender: 'Polygender',
          question:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
        },
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: false,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      }
    },
    {
      id: 4,
      publisher: {
        name: 'Octinoxate, Octisalate',
        username: 'octisalate'
      },
      gender: 'Male',
      category: 'Research and Development',
      question:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
      comments: [
        {
          publisher: 'LATANOPROST',
          gender: 'Male',
          question:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
        },
        {
          publisher: 'ustilago maydis',
          gender: 'Polygender',
          question:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
        },
        {
          publisher:
            'Acetaminophen, Dextromethorphan Hydrobromide, Doxylamine Succinate',
          gender: 'Non-binary',
          question:
            'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.'
        }
      ],
      bookmarked: true,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      }
    },
    {
      id: 5,
      publisher: {
        name: 'Promethazine Hydrochloride',
        username: 'hydrochloride'
      },
      gender: 'Female',
      category: 'Research and Development',
      question:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.',
      comments: [
        {
          publisher: 'LATANOPROST',
          gender: 'Male',
          question:
            'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.'
        },
        {
          publisher: 'ustilago maydis',
          gender: 'Polygender',
          question:
            'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.'
        }
      ],
      bookmarked: true,
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      }
    }
  ],
  loading: false,
  error: ''
}

export const getAllCategories = createAsyncThunk(
  'getAllCategories',
  async () => {
    const res = await CategoryService.getAllCategories()
    return res.data
  }
)
export const followCategory = createAsyncThunk('followCategory', async (id) => {
  console.log("xxid",id)
  const res = await CategoryService.followCategory(id)
  console.log(res)
  return res.data
})
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    reactionAdded(state, action) {
      console.log('reactionAdded: ', action);
      const { categoryId, reaction } = action.payload;
      const existingCategory = state.data.find(category => category.id === categoryId );
      if(existingCategory) {
        existingCategory.reactions[reaction]++;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state, action) => {
        state.loading = true
        state.error = ''
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = ''
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false
        state.error = 'An error occurred while get categories'
      })
      .addCase(followCategory.pending, (state, action) => {
        state.loading = true
        state.error = ''
      })
      .addCase(followCategory.fulfilled, (state, action) => {
        console.log('follow clicked', action);
        state.loading = false
        state.error = ''
      })
      .addCase(followCategory.rejected, (state, action) => {
        state.loading = false
        state.error = 'An error occurred while get categories'
      })
  }
})

export const selectAllCategories = (state) => state.categories.data;

export const { reactionAdded } = categorySlice.actions;
export default categorySlice.reducer
