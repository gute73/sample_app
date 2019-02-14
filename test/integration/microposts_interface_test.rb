require 'test_helper'

class MicropostsInterfaceTest < ActionDispatch::IntegrationTest

	def setup
		@user = users(:michael)
	end

	test "micropost interface" do
		log_in_as(@user)
		get root_path
		assert_select 'div.pagination'
		assert_select 'input[type=file]'
		#Invalid submission
		assert_no_difference 'Micropost.count' do
			post microposts_path, params: { micropost: { content: "" } }
		end
		assert_select 'div#error_explanation'
		#Valid submission
		content = "This micropost really ties the room together"
		picture = fixture_file_upload('test/fixtures/rails.png', 'image/png')
		assert_difference 'Micropost.count', 1 do
			post microposts_path, params: { micropost: { content: content, picture: picture } }
		end
		assert Micropost.first.picture?
		follow_redirect!
		assert_match content, response.body
		#Delete post
		assert_select 'a', text: 'delete'
		first_micropost = @user.microposts.paginate(page: 1).first
		assert_difference 'Micropost.count', -1 do
			delete micropost_path(first_micropost)
		end
		#Visit different user (no delete links)
		get user_path(users(:archer))
		assert_select 'a', text: 'delete', count: 0
	end

	test "sidebar micropost count" do
		log_in_as(@user)
		get root_path
		microcount = @user.microposts.count
		assert_select 'span', text: "#{microcount} microposts"
		#Test that micropost is in singular or plural form as appropriate
		second_user = users(:malory)
		log_in_as(second_user)
		get root_path
		assert_select 'span', text: '0 microposts'
		post microposts_path, params: { micropost: { content: "Test" } }
		follow_redirect!
		assert_select 'span', text: '1 micropost'
	end

end