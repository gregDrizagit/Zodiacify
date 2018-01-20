class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  def create
    @user = User.create(full_name: params[:name], birthdate: params[:birthdate])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    @user.eastern = Eastern.all.find(params[:eastern])
    @user.western = Western.all.find(params[:western])
    render json: @user
  end

end
