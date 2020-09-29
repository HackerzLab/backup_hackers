package TrainingHackers::Controller::Index;
use parent qw(TrainingHackers::Controller::Base);
use utf8;

sub index {
    my $self = shift;

    $self->stash(
        q => $self->session->data->{user},
        title => '登録',
        error => $self->session->data->{error},
        user => $self->session->data->{user},
        questions => $self->model('Question')->search_all
    );
    $self->render('index/index.tx');
}

1;
