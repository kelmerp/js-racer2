
get '/' do
  erb :index
end

get '/winner' do

  erb :winner
end


post '/race' do
  @player_1 = Player.find_or_create_by_name(params[:player1])
  @player_2 = Player.find_or_create_by_name(params[:player2])

  @game = Game.create()
  @game.rounds << @player_1

  erb :race
end

post '/results' do

  redirect to '/winner'
end
